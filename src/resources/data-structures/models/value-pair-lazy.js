import { ValuePair } from 'resources/data-structures/models/value-pair';

export class ValuePairLazy extends ValuePair {
  constructor(key, value, isDeleted = false) {
    super(key, value);
    this.key = key;
    this.value = value;
    this.isDeleted = isDeleted;
  }
}
