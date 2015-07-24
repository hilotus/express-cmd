require "thor"

module ExpressCmd
  class Generator < Thor::Group
    include Thor::Actions

    argument :app_name

    def self.source_root
      File.join(File.dirname(__FILE__), "../../", "templates")
    end

    def setup_lib
      keep_file "#{app_name}/lib"
      copy_file "lib/errors.js", "#{app_name}/lib/errors.js"
      copy_file "lib/logger.js", "#{app_name}/lib/logger.js"
    end

    def setup_config
      keep_file "#{app_name}/config"
    end

    def setup_middleware
      keep_file "#{app_name}/middlewares"
      copy_file "middlewares/before-filter.js", "#{app_name}/middlewares/before-filter.js"
      copy_file "middlewares/error-handler.js", "#{app_name}/middlewares/error-handler.js"
      copy_file "middlewares/morgan-log.js", "#{app_name}/middlewares/morgan-log.js"
    end

    def setup_route
      keep_file "#{app_name}/routes"
      copy_file "routes/instance.js", "#{app_name}/routes/instance.js"
      copy_file "routes/configuration.js", "#{app_name}/routes/configuration.js"
      copy_file "routes/translation.js", "#{app_name}/routes/translation.js"
    end

    def setup_test
      keep_file "#{app_name}/test"
      keep_file "#{app_name}/test/reporter"
      keep_file "#{app_name}/test/units"

      copy_file "test/test-helper.js", "#{app_name}/test/test-helper.js"
      copy_file "test/units/demo_test.js", "#{app_name}/test/units/demo_test.js"
    end

    def setup_appfile
      copy_file ".gitignore", "#{app_name}/.gitignore"
      copy_file "Makefile", "#{app_name}/Makefile"
      copy_file "server.js", "#{app_name}/server.js"
      template "package.json.erb", "#{app_name}/package.json"
      template "README.md.erb", "#{app_name}/README.md"
    end

    def bundle_install
      system "cd #{app_name} && npm install && cd ../"
    end

    protected

      def keep_file(destination)
        create_file "#{destination}/.gitkeep"
      end
  end
end
