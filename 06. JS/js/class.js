class Ironman {
  constructor(realName = "Tony Stark") {
    this.realName = realName;
  }
  revealIdentity() {
    return this.realName;
  }
}

class IronmanMark54 extends Ironman {
  constructor(realName) {
    super(realName);
  }
  revealIdentityMark54() {
    return this.realName;
  }
}

const tonyStark = new IronmanMark54();
console.log(tonyStark);
