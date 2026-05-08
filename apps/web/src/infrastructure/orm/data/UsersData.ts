export const FirstUsersData = [
    {
        name: 'System',
        email: 'system@smapbcn.cat',
        passwordHash: "system#sandboxPass",
    },
    {
        name: 'Salva',
        firstSurname: "Mata",
        secondSurname: "Garcia",
        email: 'smata@smapbcn.cat',
        passwordHash: "smap#sandboxPass",
    },
    {
        name: 'User 1',
        firstSurname: "first",
        secondSurname: "second",
        email: 'user1@smapbcn.cat',
        passwordHash: "user1#sandboxPass",
    },
    {
        name: 'User 2',
        firstSurname: "first",
        secondSurname: "second",
        email: 'user2@smapbcn.cat',
        passwordHash: "user2#sandboxPass",
        createdBy: 3,
        createdAt: new Date(),
    }
];

export const UserPrivilegesData = [
    {
        userId: 2,
        roleId: 2,
        
        // Privilegis crud d'administradors
        createAdmin: true,
        updateAdmin: true,
        deleteAdmin: true,
        readAdmin: true,
        
        // Privilegis crud d'usuaris
        createUser: true,
        updateUser: true,
        deleteUser: true,
        readUser: true,
        
        // Privilegis crud de projectes
        createProject: true,
        deleteProject: true,
        updateProject: true,
        readProject: true,
        
        // Privilegis crud de tasques
        createTask: true,
        updateTask: true,
        deleteTask: true,
        readTask: true,
        
        // Privilegis crud de comentaris
        createComment: true,
        updateComment: true,
        deleteComment: true,
        readComment: true,
        
        // Privilegis de desplegament i CI
        createSnapshot: true,
        createRelease: true,
        createFeature: true,
        createHotfix: true,
        deployment: true,
    }
]

export const UserSettingsData = [
    {
        userId: 2,
    }
]