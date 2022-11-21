import SimpleFighter from './Fighter/SimpleFighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;
  private _damage = 0;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  receiveDamage(attackPoints: number): number {
    this._damage = this._lifePoints - attackPoints;
    if (this._damage > 0) {
      this._lifePoints -= this._damage;
      if (this._lifePoints <= 0) {
        this._lifePoints = -1;
      }
    }
    return this._lifePoints;
  }
}