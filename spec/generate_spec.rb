describe ExpressCmd do
  it "Generator express" do
    bin_path = File.join(File.expand_path('../../bin', __FILE__))
    system("#{bin_path}/express test-project")
  end
end
