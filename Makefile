DOTFILES := $(shell pwd)

install: clean _vim _tmux _slate

_vim:
	ln -fns $(DOTFILES)/vim/vim ${HOME}/.vim
	ln -fs $(DOTFILES)/vim/vimrc ${HOME}/.vimrc
	mkdir -p $(DOTFILES)/vim/vim/bundle
	git clone https://github.com/gmarik/Vundle.vim $(DOTFILES)/vim/vim/bundle/Vundle.vim
	vim +PluginInstall +qall

clean_vim:
	rm -rf $(DOTFILES)/vim/vim/bundle

_tmux:
	ln -fs $(DOTFILES)/tmux/tmux.conf ${HOME}/.tmux.conf

_slate:
	ln -fs $(DOTFILES)/slate/slate.js ${HOME}/.slate.js

clean: clean_vim

.PHONY: install clean_vim clean
