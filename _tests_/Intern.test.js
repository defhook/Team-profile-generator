const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Peter', 3, 'petertest@mail.com', 'Intern', 'El Paso High Tigers');

    expect(intern.name).toBe('Peter');
    expect(intern.id).toEqual(3);
    expect(intern.email).toBe('petertest@mail.com');
    expect(intern.role).toBe('Intern');
    expect(intern.school).toBe('El Paso High Tigers');
});