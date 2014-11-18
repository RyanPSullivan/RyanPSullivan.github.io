# Emacs Cheatsheet

## Get Out Of Dodge
* C-x, C-c : end emacs session
* C-g : clear bufferg

## Screen Commands
* C-v : page down
* M-v : page up
* C-l : refresh screen
* C-l, C-l : bring current line to top of the screen

## Cursor Control
* C-p : previous line
* C-n : next line
* C-b : backward
* C-f : forward character
* C-a : line start
* C-e : line end
* M-b : backward word
* M-f : forward word
* M-a : sentence start
* M-e : sentence end

## Misc
* C-u : supply a unit (used for repeating commands)
* C-g : clear the mini buffer
* <ESC>,<ESC>,<ESC> : get out command

## Window
* C-x 2 : splits the screen into two windows
* C-x o : moves the curor to 'other' window
* C-M-v : scroll other window
* C-x 1 : revert to single window
* C-x 0 : delete selected window

## Inserting And Deleting
* DEL : delete previous character
* C-d : delete next character
* M-DEL : delete the word previous to the character
* M-d : delete the next word
* C-k : kill from the cursor position to the end of line
* M-k : kill to the end of the current sentence
* C-SPC, C-w : Select characters and kill them
* C-y : yank, re-inserts killed text
* M-y : yank, cycles through the kill ring

NB: Killed text can be yanked back to life, deleted text is gone forever


## Undo
* C-_ : undo previous text alteration

NB: Undoing can bring back deleted text

## Files
* C-x, C-f : find a file
* C-x, C-s : save file
* M-x, recover-file : recovers the open file from the autosaved version in the event of a crash

## Directories
* C-x d : enter dired mode
* \+ : create directory in CWD  whilst in dired mode
* R : rename directory or file whilst in dired mode

## Buffers
* C-x, C-b : list buffers
* C-x, 1 : close buffer list
* C-x, b : switch to buffer
* C-x, s : prompts for saving of changed open buffers


## Mode Line
* M-x, text-mode : switches the major mode to text edit
* C-h, m : show help for modes
NB: Major-Mode contained in the parenthesis changes the context of which some of the commands are bound.

## Searching
* C-s : enters interactive search mode

NB: Whilst in incremental search mode you may type strings to search for, subsequent C-s will find next occurences C-r will find previous. <Return> will end the interactive search session
