#!/usr/bin/env python

import glob
from os import path
from tools.Closure import Closure
from tools.Shared import *

js_path = "js"

def main():
  closure_path = path.join('deps', 'closure-library','closure')

  js_dirs = glob.glob(path.join(js_path, '**/'))
  js_dirs += glob.glob('deps/easel/src/easeljs/**/')
  deps_js_path = path.join(js_path, "deps.js")
  compiled_js_path = path.join(js_path, "compiled.js")

  externs = glob.glob(path.join(js_path, '../libs/*.extern.js'))

  Closure(
    closure_path = closure_path,
    application_js_path = None,
    root_symbol = 'Application',
    closure_dependencies = js_dirs,
    deps_js_path = deps_js_path,
    compiled_js_path = compiled_js_path,
    extern_files = externs
  ).build_and_process('index_source.html', 'index.html', debug = False, skip_build = False)

if __name__ == '__main__':
  main()
