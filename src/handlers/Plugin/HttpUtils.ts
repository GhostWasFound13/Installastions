import * as ISO6391 from "iso-639-1";
import * as sourcebin from "sourcebin_js";

import fetch from "node-fetch";
import { translate as gTranslate } from "@vitalets/google-translate-api";

export default class HttpUtils {
  /**
   * Returns JSON response from url
   * @param {string} url
   * @param {object} options
   */
  static async getJson(url: string, options?: RequestInit) {
    try {
      // with auth
      const response = options ? await fetch(url, options) : await fetch(url);
      const json = await response.json();
      const success = response.status === 200;
      
      if (success) {
        logger.info(`Successful request to ${url}`);
      } else {
        logger.error(`Failed request to ${url}`);
      }
return {
        success,
        status: response.status,
        data: json,
      };
    } catch (ex) {
      logger.error(`Error in getJson: ${ex}`);
      return {
        success: false,
      };
    }
  }  

  /**
   * Returns buffer from url
   * @param {string} url
   * @param {object} options
   */
  static async getBuffer(url: string, options?: RequestInit) {
    try {
      const response = options ? await fetch(url, options) : await fetch(url);
      const buffer = await response.buffer();
      const success = response.status === 200;

      if (success) {
        logger.info(`Successful request to ${url}`);
      } else {
        logger.error(`Failed request to ${url}`);
      }
    return {
        success,
        status: response.status,
        buffer,
      };
    } catch (ex) {
      logger.error(`Error in getBuffer: ${ex}`);
      return {
        success: false,
      };
    }
  }

  /**
   * Translates the provided content to the provided language code
   * @param {string} content
   * @param {string} outputCode
   */
  static async translate(content: string, outputCode: string) {
    try {
      const { text, raw } = await gTranslate(content, { to: outputCode });
      return {
        input: raw.src,
        output: text,
        inputCode: raw.src,
        outputCode,
        inputLang: ISO6391.getName(raw.src),
        outputLang: ISO6391.getName(outputCode),
      };
 } catch (ex) {
      logger.error(`Error in translate: ${ex}`);
    }
  }

  /**
   * Posts the provided content to the BIN
   * @param {string} content
   * @param {string} title
   */
  static async postToBin(content: string, title: string) {
    try {
      const response = await sourcebin.create(
        [
          {
            name: " ",
            content,
            languageId: "text",
          },
        ],
        {
          title,
          description: " ",
        }
      );
      return {
        url: response.url,
        short: response.short,
        raw: `https://cdn.sourceb.in/bins/${response.key}/0`,
      };
    } catch (ex) {
      logger.error(`Error in postToBin: ${ex}`);
    }
  }
}
