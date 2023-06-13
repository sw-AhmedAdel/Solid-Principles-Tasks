// apply Single Responsibility Principles so class email can send just emails
class email {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  // simulate sending email
  async sendEmail() {
    await console.log(`Send email to ${this.name} to ${this.email}`);
  }
}

model.exports = email;
