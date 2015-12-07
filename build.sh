#!/bin/bash

gitbook build ./books ./_site/books
gitbook build ./interview ./_site/interview
gitbook build ./collect ./_site/collect
gitbook build ./style-guide ./_site/style-guide
gitbook build ./reference ./_site/reference
