DOTFILES := $(shell pwd)

install: clean _vim

_vim:
	ln -fns $(DOTFILES)/vim/vim ${HOME}/.vim
	ln -fs $(DOTFILES)/vim/vimrc ${HOME}/.vimrc
	mkdir -p $(DOTFILES)/vim/vim/bundle
	git clone https://github.com/gmarik/Vundle.vim $(DOTFILES)/vim/vim/bundle/Vundle.vim
	vim +PluginInstall +qall

clean_vim:
	rm -rf $(DOTFILES)/vim/vim/bundle

clean: clean_vim

.PHONY: install clean_vim clean
