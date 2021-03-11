const myMockFn = jest.fn(cb => cb(null, true));
myMockFn((err, val) => val);

test('Mocking a function',()=>{
    myMockFn(1);
    myMockFn(2);
    expect.assertions(3);
    expect(myMockFn).toHaveReturned();
    expect(myMockFn).toHaveReturnedTimes(2);
    expect(myMockFn).toHaveBeenCalled();
});

