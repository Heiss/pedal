#!/usr/bin/env python

import os
import pypandoc
import json


def sortFunction(elem):
    return "".join(elem["pub_date"].split(".").reverse())


def parseMetadata(filename):
    metadata = {}

    with open(filename) as fs:
        if fs.readline().startsWith("---"):
            for line in fs.readlines():
                if line.startsWith("---"):
                    break

                split = line.split(": ", 1)
                metadata[split[0]] = split[1]

    return metadata


if __name__ == "__main__":
    files = []

    directory = "posts"

    for filename in os.listdir(directory):
        if not os.path.isfile(filename):
            continue

        metadata = parseMetadata(filename)
        metadata["body"] = pypandoc.convert_file(filename, 'html')

        files.append(metadata)

    files.sort(key=sortFunction, reverse=True)

    with open('src/assets/data/posts.json', 'w') as jsonFile:
        json.dump(files, jsonFile)
