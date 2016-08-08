# grunt-rust [![Build Status](https://travis-ci.org/gabeharms/grunt-rust.svg)](https://travis-ci.org/gabeharms/grunt-rust)

> Test, Build, and Run your Rust App 


## Prerequisites
1.) Rust & Cargo installed
2.) `Cargo.toml` file in same directory as `Gruntfile.js`
3.) Valid rust file to build (i.e. `src/main.rs`) 


## Install

```
$ npm install --save-dev grunt-rust 
```


## Usage

```js
grunt.initConfig({
  rust: {
    test: {},
    build: {},
    run: {}
  }
});

grunt.registerTask('default', ['rust:test', 'rust:build', 'rust:run']);
```


## Options

See the Rust's [Cargo Docs](https://github.com/rust-lang/cargo) or run `cargo -h` for details about each option

The following is an exhaustive list of all available options for each task, all of which are optional:

```js
grunt.initConfig({
  rust: {
    test: {
      doc: Bool,
      lib: Bool,
      noDefaultFeatures: Bool,
      noRun: Bool,
      release: Bool,
      jobs: Number,
      bin: String,
      manifestPath: String,
      target: String,
      test: String,
      features: [String],

    },
    build: {
      lib: Bool,
      noDefaultFeatures: Bool,
      release: Bool,
      jobs: Number,
      bin: String,
      manifestPath: String,
      target: String,
      features: [String],
    },
    run: {
      noDefaultFeatures: Bool,
      release: Bool,
      jobs: Number,
      bin: String,
      manifestPath: String,
      target: String,
      features: [String],
    }
  }
});
```

## License

MIT License ©
