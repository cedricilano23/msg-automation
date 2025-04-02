// in this file you can append custom step methods to 'I' object
import { expect } from 'chai';

export = function() {
  return actor({
    login: async function(username: string, password: string) {

      console.log('Filling username');
      await this.fillField('[data-test="username"]', username);
      
      console.log('Filling password');
      await this.fillField('[data-test="password"]', password);

      console.log('Clicking login button');
      await this.click('[data-test="login-button"]');

      await this.wait(1);
    },
    seeResponseCodeIs(code: number) {
      return this.assertEqual(this.grabResponse().status, code);
    },
    seeResponseContainsJson(json: object) {
      return this.assertContain(this.grabResponse().data, json);
    },
    
    assertEqual(actual: any, expected: any) {
      if (actual !== expected) {
        throw new Error(`Expected ${expected} but got ${actual}`);
      } else {
        expect(actual).to.equal(expected);
        return true;
      }
    },
    assertContain(actual: any, expected: any) {
      if (typeof actual === 'object' && typeof expected === 'object') {
        expect(actual).to.deep.include(expected);
      } else {
        expect(actual).to.include(expected);
      }
      return true;
    },

    assertTrue(condition: boolean, message?: string) {
      if (!condition) {
        throw new Error(message || 'Assertion failed');
      }
      return true;
    }
  });
}
