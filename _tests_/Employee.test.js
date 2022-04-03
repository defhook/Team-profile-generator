const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Austin', 1, 'austintest@mail.com', 'role');

    expect(employee.name).toBe('Austin');
    expect(employee.id).toEqual(1);
    expect(employee.email).toBe('austintest@mail.com');
    expect(employee.role).toBe('role');
});