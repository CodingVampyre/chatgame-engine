# Specification

## Introduction
This specification aims to define a standard syntax to create fake chat games.

## Requirements

| Name | Description |
| ---- | ----------- |
| R1 | A game consists of a chatflow, a media player and a log |
| R1.1 | A chatflow consists of channels, users, messages, decisions and flags |
| R1.1.1 | A Channel consists of members and messages |
| R1.1.2 | A message is written by a user after a given time since the last message |
| R1.1.3 | A decision is made by the player and consists of multiple possibilities |
| R1.1.3.1 | Each possibility leads to a specific branch of messages and sets flags |
| R1.1.4 | Each flag can be used to branch at any given point in the chat flow |
| R1.1.5 | A message may contain a medium to play |
| R1.2 | A medium may be text, audio and video |