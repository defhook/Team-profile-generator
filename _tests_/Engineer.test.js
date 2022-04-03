const Engineer = require('../lib/Engineer');

test ('creates an Engineer object', () => {
    const engineer = new Engineer('Mike', 2, 'miketest@mail.com', "Engineer", 'firemike');

    expect(employee.name).toBe('Mike');
    expect(employee.id).toEqual(2);
    expect(employee.email).toBe('miketest@mail.com');
    expect(employee.role).toBe('Engineer');
    expect(engineer.github).toBe('firemike');
});