const Engineer = require('../lib/Engineer');

test ('creates an Engineer object', () => {
    const engineer = new Engineer('Mike', 2, 'miketest@mail.com', "Engineer", 'firemike');

    expect(engineer.name).toBe('Mike');
    expect(engineer.id).toEqual(2);
    expect(engineer.email).toBe('miketest@mail.com');
    expect(engineer.role).toBe('Engineer');
    expect(engineer.github).toBe('firemike');
});