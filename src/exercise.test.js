import { delay } from "./exercise";

describe('tests', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return 'Hello' after 2s", async () => {
    const rta = await delay(2000, 'Hello');
    expect(rta).toBe("Hello");
  });

  it("should call setTimeout with 2s", async () => {
    const spy = jest.spyOn(global, "setTimeout");

    const rta = await delay(2000, 'Hello');
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenLastCalledWith(expect.any(Function), 2000);
    expect(rta).toBe("Hello");
  });

  it("should call setTimeout with 1s", async () => {
    const spy = jest.spyOn(global, "setTimeout");

    const rta = await delay(1000, 'Hello 1s');
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenLastCalledWith(expect.any(Function), 1000);
    expect(rta).toBe("Hello 1s");
  });
});
