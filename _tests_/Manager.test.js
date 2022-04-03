const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Kyle', 4, 'kyletest@mail.com', 'Manager', 8);

    expect(manager.name).toBe('Kyle');
    expect(manager.id).toEqual(4);
    expect(manager.email).toBe('kyletest@mail.com');
    expect(manager.role).toBe('Manager');
    expect(manager.officeNumber).toBe(8);
});