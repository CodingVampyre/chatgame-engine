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

## Schema

### Message
A single message must contain the channel, delay before and author
```text
"<name>" WAITS <time_seconds> IN "<channel>" WRITES "<text>"
"Monica" WAITS 2 IN "PrivateMonica" WRITES "Hey there, how are you?" 
```

### Block
Messages are written in Blocks
```text
BLOCK START:
    "Frank" WAITS 5 IN "Group1" WRITES "Greetings to you all"
    "Monica" WAITS 3 IN "Group1" WRITES "Greetings to you too :)"
```

### Player Decision
Decisions contain possibilities that lead to new blocks
````text
START:
    "Frank" WAITS 5 IN "Group1" WRITES "Greetings to you all"
    "Monica" WAITS 3 IN "Group1" WRITES "Greetings to you too :)"
    DESCISION:
        "Greetings back" TO BLOCK2
        "Who are you?" TO BLOCK3
        
BLOCK2:
    "Monica" WAITS 3 IN "Group1" WRITES "So... Who made this group?"
    
BLOCK3:
    "Monica" WAITS 2 IN "Group1" WRITES "Good question!"
````
> Identations MUST be tab characters