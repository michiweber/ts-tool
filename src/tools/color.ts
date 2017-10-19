export class Color {

  /**
   *
   * Random hex code generator
   * @copyright Paul Irish
   * @link https://www.paulirish.com/2009/random-hex-color-code-snippets/
   *
   * @returns {string}
   */

  public static randomHexGenerator() {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
  }

}
