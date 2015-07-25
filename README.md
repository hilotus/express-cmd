# ExpressCmd

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'express-cmd'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install express-cmd

## Usage

I choose `mongodb` as my datastore, and I perfer to use `mongoose`.

1. make sure you have installed node-inspector (debug tool) and nodemon (node auto reload after saved).

```bash
npm install -g node-inspector
npm install -g nodemon
```

2. `express app_name`, and you can specify an option, for example `express my-project --skip_npm_install`.

**supported options**: `--skip_npm_install`.

## Test

I choose `mocha` and `chai`, and use `Makefile` to run test. Run `make jenkins` to generate test report.


## Development

After checking out the repo, run `bin/setup` to install dependencies. Then, run `rake false` to run the tests. You can also run `bin/console` for an interactive prompt that will allow you to experiment.

To install this gem onto your local machine, run `bundle exec rake install`. To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release`, which will create a git tag for the version, push git commits and tags, and push the `.gem` file to [rubygems.org](https://rubygems.org).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/[USERNAME]/express-cmd. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](contributor-covenant.org) code of conduct.


## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

