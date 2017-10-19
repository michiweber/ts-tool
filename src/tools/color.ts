export class Color {

  public static randomHexGenerator() {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
  }

}
