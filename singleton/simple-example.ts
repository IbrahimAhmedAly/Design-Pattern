class Singleton {
  private static instance: Singleton;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) Singleton.instance = new Singleton();

    return Singleton.instance;
  }

  public showMessage(): void {
    console.log("hello from Singleton!");
  }
}

const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

singleton1.showMessage();
