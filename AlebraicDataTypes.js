function zero(){}

function succ(nat) {
  return function() {
    return nat;
  };
}