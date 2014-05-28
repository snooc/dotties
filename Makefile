DOTFILES := $(shell pwd)

all: _vim

_vim:
	ln -fns $(DOTFILES)/vim/vim ${HOME}/.vim
	ln -fs $(DOTFILES)/vim/vimrc ${HOME}/.vimrc
