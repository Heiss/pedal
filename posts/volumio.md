---
author: 0
pub_date: 21.07.2020
title: Stream your music all over your place.
headline: Lets configure volumio to work with snapcast
category: Software
image: https://i1.wp.com/theyellowsoundmachine.com/wp-content/uploads/2019/01/VolumioWallpaper.png?fit=1000%2C568
---

In this tutorial, you will see my configuration to let volumio work with snapcast without any headaches.

I am running volumio on a raspberry pi 4 with 4 gb ram. The snapcast clients are raspberry pi 3 B+. Both with raspbian (latest version). Snapcast client follows the instructions on https://github.com/badaix/snapcast#debian. Volumio follows the instructions on https://volumio.org/get-started/.

After the installation of volumio, i installed via volumio UI the following addon: spotify-connect2.
Now enable the dev ssh connection (https://volumio.github.io/docs/User_Manual/SSH.html) and login via putty or ssh. You should clone the following repo https://github.com/Saiyato/volumio-plugin-helper and cd into it. Now you can install the current version of volumio snapcast plugin with the following command:

```bash
sh volumio_install_from_zip.sh Saiyato volumio-snapcast-plugin
```

Now you should everything configure like me.

## /etc/snapserver.conf

```bash
# defaults file for snapserver

# start snapserver automatically?
START_SNAPSERVER=true

# Allowed options:
#   -h, --help                          Produce help message
#   -v, --version                       Show version number
#   -p, --port arg (=1704)              Server port
#   --controlPort arg (=1705)           Remote control port
#   -s, --stream arg (=pipe:///tmp/snapfifo?name=default)
#                                       URI of the PCM input stream.
#                                       Format: TYPE://host/path?name=NAME
#                                       [&codec=CODEC]
#                                       [&sampleformat=SAMPLEFORMAT]
#   --sampleformat arg (=48000:16:2)    Default sample format
#   -c, --codec arg (=flac)             Default transport codec
#                                       (flac|ogg|pcm)[:options]
#                                       Type codec:? to get codec specific options
#   --streamBuffer arg (=20)            Default stream read buffer [ms]
#   -b, --buffer arg (=1000)            Buffer [ms]
#   --sendToMuted                       Send audio to muted clients
#   -d, --daemon [=arg(=0)]             Daemonize
#                                       optional process priority [-20..19]
#   --user arg                          the user[:group] to run snapserver as when daemonized

USER_OPTS="--user snapserver:snapserver"

SNAPSERVER_OPTS="-d -s pipe:///tmp/snapfifo?name=VOLUMIO-MPD&mode=read&sampleformat=44100:16:2 "
```

## /etc/mpd.conf

```bash
# Volumio MPD Configuration File

# Files and directories #######################################################
music_directory         "/var/lib/mpd/music"
playlist_directory              "/var/lib/mpd/playlists"
db_file                 "/var/lib/mpd/tag_cache"
log_file                        "/var/log/mpd.log"
#pid_file                       "/var/run/mpd/pid"
#state_file                     "/var/lib/mpd/state"
#sticker_file                   "/var/lib/mpd/sticker.sql"
###############################################################################

# General music daemon options ################################################
user                            "mpd"
group                          "audio"
bind_to_address         "any"
#port                           "6600"
#log_level                      "default"
gapless_mp3_playback                    "no"
#save_absolute_paths_in_playlists       "no"
#metadata_to_use        "artist,album,title,track,name,genre,date,composer,performer,disc"
auto_update    "yes"
#auto_update_depth "3"
###############################################################################
# Symbolic link behavior ######################################################
follow_outside_symlinks "yes"
follow_inside_symlinks          "yes"
###############################################################################
# Input #######################################################################
#
input {
        plugin "curl"
#       proxy "proxy.isp.com:8080"
#       proxy_user "user"
#       proxy_password "password"
}
###############################################################################

# Decoder ################################################################





###############################################################################

# Audio Output ################################################################

resampler {
                plugin "soxr"
                quality "high"
                threads "1"
}

audio_output {
        type "alsa"
        name "alsa"
        device "default"
}

#replaygain                     "album"
#replaygain_preamp              "0"
volume_normalization            "no"
###############################################################################

# MPD Internal Buffering ######################################################
audio_buffer_size               "2048"
buffer_before_play              "10%"
###############################################################################


# Resource Limitations ########################################################
#connection_timeout             "60"
max_connections                 "20"
max_playlist_length             "81920"
max_command_list_size           "81920"
max_output_buffer_size          "81920"
###############################################################################

# Character Encoding ##########################################################
filesystem_charset              "UTF-8"
id3v1_encoding                  "UTF-8"
###############################################################################
```

## /etc/spop.conf

```bash
[spop]
spotify_username = XXX
spotify_password = XXX
high_bitrate = true
refresh_token = XXX
audio_output = sox
pretty_json = true
search_results = 50
cache_path =/run/shm

[sox]
output_type = alsa
output_name = default
```

## /etc/asound.conf

```bash
pcm.!default {
    type plug
    slave.pcm rate48000Hz
}

pcm.rate48000Hz {
    type rate
    slave {
        pcm writeFile # Direct to the plugin which will write to a file
        format S16_LE
        rate 44100
    }
}


pcm.card0 {
   type hw
   card 0
}

ctl.card0 {
   type hw
   card 0
}
#SNAPCAST
pcm.writeFile {
        type file
        slave.pcm null
        file "/tmp/snapfifo"
        format "raw"
}
#ENDOFSNAPCAST
```

## /data/plugins/music_service/volspotconnect2/volspotify.toml

```bash
# Default Vollibrespot config
# This file is autogenerated from the plugin, and will be overwritten when system changes are detected
[Authentication]
shared = true
username = ''
password = ''
device-name = 'musik'  # Name of the Spotify connect device

[Playback]
bitrate = 320
enable-volume-normalisation = false
normalisation-pregain = 1 # "Pregain (dB) applied by volume normalisation"
volume-ctrl = 'linear' # Volume control type - [linear, log, fixed]. Default is linear
autoplay = true
gapless = true

[Output]
device = 'default'
#device = '/tmp/snapfifo'
initial-volume = 50
mixer = 'alsa' # softvolume or alsa
mixer-name = 'PCM'
mixer-card = 'hw:0'
mixer-index = 0
# Disable alsa's mapped volume scale (cubic). Default false
mixer-linear-volume = false
backend = 'alsa'
#backend = 'pipe'

[Misc]
disable-audio-cache = true  # Cache audio files (relies on local system for cleanup!)
cache-location = '/tmp'     # Path to cache
metadata-port = 5030
# ap-port =  443 # Connect to AP with specified port. If no AP with that port are present fallback AP will be used. Available ports are usually 80, 443 and 4070
```

After this, restart your volumio installation with

```bash
sudo systemctl restart volumio
```

If you configure the snapclient, you have to set the output of volumio to _HDMI Out_ and set the audio of your RPI to the audiojack with

```bash
amixer cset numid=3 0
```

Everything should now run as expected and your snapclients should connects within 30 seconds after you plugin the power cord. Have fun.
