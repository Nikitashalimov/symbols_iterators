const unit1 = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

const unit2 = {
  name: 'Демон',
  type: 'Daemon',
  health: 100,
  level: 2,
  attack: 30,
  defence: 20,
};

const unit3 = {
  name: 'Мечник',
  type: 'Swordsman',
  health: 100,
  level: 1,
  attack: 30,
  defence: 40,
};

const units = [unit1, unit2, unit3];

class Team {
  constructor(units) {
    this.units = units;
  }

  iterator() {
    const current = this.units;
    const last = 0;
    return {
      next() {
        if (current.length > last) {
          return {
            value: current.shift(),
            done: false,
          };
        }
        return {
          value: undefined,
          done: true,
        };
      },
    };
  }
}

const team = new Team(units);
console.log(team.iterator().next());
console.log(team.iterator().next());
console.log(team.iterator().next());
console.log(team.iterator().next());
