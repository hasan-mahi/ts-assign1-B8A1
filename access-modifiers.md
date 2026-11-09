# Access Modifiers in TypeScript OOP

## Introduction

When we write a class in TypeScript, we may not want every part of the class to be available to everyone. Access modifiers help control which parts of a class can be used from other code. The main modifiers are public, private, protected, and readonly.

## Detailed Explanation

public means a property or method can be used from anywhere. It is the default. So TypeScript assumes a class member is public when no modifier is written.

private means a member can only be used inside the class where it is declared. This is useful for keeping internal details away from outside code. protected is similar, but it can also be used inside classes that extend the original class.

readonly means a property can be given a value when it is declared or inside the constructor but it cannot be changed later. It is helpful for values that should stay the same, such as an account ID.

class Account {
  public owner: string;
  private balance: number;
  protected bankName: string;
  readonly accountId: number;

  constructor(owner: string, id: number) {
    this.owner = owner;
    this.balance = 100;
    this.bankName = "ABC Bank";
    this.accountId = id;
  }

  public showBalance(): number {
    return this.balance;
  }
}

class SavingsAccount extends Account {
  showBank(): string {
    return this.bankName; // Allowed: protected member
  }
}

Here, owner can be accessed from outside the class, but balance cannot. A child class can use bankName, while accountId cannot be reassigned after construction.

## Conclusion

Access modifiers make classes easier to organize and protect from accidental changes. We use public for shared members, private for class-only details, protected for class and child-class access and readonly for values that should not change. These are TypeScript checks. They do not automatically provide runtime security in JavaScript.