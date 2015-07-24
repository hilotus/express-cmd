# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'express_cmd/version'

Gem::Specification.new do |spec|
  spec.name          = "express-cmd"
  spec.version       = ExpressCmd::VERSION
  spec.authors       = ["wluo"]
  spec.email         = ["luowei---010101@163.com"]

  spec.summary       = %q{Command for generating sinatra project}
  spec.description   = %q{Generate a sinatra project.}
  spec.homepage      = "https://github.com/hilotus/express-cmd"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0")
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ["lib"]

  spec.required_ruby_version = '>= 2.1.0'

  spec.add_development_dependency "bundler", "~> 1.9"
  spec.add_development_dependency "rake", "~> 10.0"
  spec.add_development_dependency "thor", "~> 0.19"

  spec.add_development_dependency "rspec", "~> 3.2"
  spec.add_development_dependency "pry", "~> 0.10"
  spec.add_development_dependency "pry-stack_explorer", "~> 0.4"
  spec.add_development_dependency "pry-byebug", "~> 3.0"
end
