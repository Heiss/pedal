#!/usr/bin/env python

import os
import pypandoc
import json
import logging

logging.basicConfig(level=logging.DEBUG)
LOGGER = logging.getLogger(__name__)


def sortFunction(elem):
    LOGGER.debug(f"got elem {elem}")

    split = elem["pub_date"].split(".")
    LOGGER.debug(f"split list {split}")
    split.reverse()
    LOGGER.debug(f"reverse list {split}")
    date = "".join(split)
    LOGGER.debug(f"Sort date value: {date}")
    return date


def parseMetadata(filename):
    LOGGER.debug(f"parse Metadata for file {filename}")

    metadata = {}

    with open(filename) as fs:
        if fs.readline().startswith("---"):
            LOGGER.debug("File starts with ---")
            for line in fs.readlines():
                if line.startswith("---"):
                    LOGGER.debug("Found ---")
                    break

                split = line.strip().split(": ", 1)
                LOGGER.debug("Split metadata key {}, value {}".format(*split))
                metadata[split[0]] = split[1]
        else:
            LOGGER.debug("File starts not with ---")

    return metadata


if __name__ == "__main__":
    files = []

    directory = "./posts"

    LOGGER.debug(f"search directory {directory}")

    for filename in os.listdir(directory):
        path = "{}/{}".format(directory, filename)
        LOGGER.debug(f"try filepath {path}")

        if not os.path.isfile(path):
            LOGGER.debug("Not a file")
            continue

        metadata = parseMetadata(path)
        metadata["body"] = pypandoc.convert_file(
            path, 'html', extra_args=("--highlight-style", "pygments")).strip()

        LOGGER.debug(f"append metadata dict {metadata}")

        files.append(metadata)

    files.sort(key=sortFunction, reverse=True)

    id = 0
    for file in files:
        file["id"] = id
        id += 1

    LOGGER.debug(f"files {files}")

    with open('src/assets/data/posts.json', 'w') as jsonFile:
        json.dump(files, jsonFile)

    LOGGER.debug(f"Done")
