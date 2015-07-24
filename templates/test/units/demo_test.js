describe('Demo Test', function(){
  it("#Chai should sample example", function(done) {
    var user = {
      name: 'tj',
      pets: ['tobi', 'loki', 'jane', 'bandit']
    };

    user.should.have.property('name', 'tj');
    user.should.have.property('pets').with.length(4);
    done();
  });
});
