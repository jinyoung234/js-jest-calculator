import Calulator from '../src/Calulator';

describe('계산기 기능 요구사항 테스트', () => {
  test('2개의 숫자에 대해 덧셈이 가능하다.', () => {
    const result = Calulator.add(1, 2);
    expect(result).toBe(3);
  });
  test('2개의 숫자에 대해 뺄셈이 가능하다.', () => {
    const result = Calulator.subtract(2, 1);
    expect(result).toBe(1);
  });
});
