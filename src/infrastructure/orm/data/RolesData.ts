import {RolesDefinitions, Scopes} from "@/infrastructure/orm/lib/definitions/RolesDefinitions";

const roles = RolesDefinitions;

export const FirstRolesData = [
    {
        name: roles.system.key
    },
    {
        name: roles.root.key
    },
    {
        name: roles.admin.key
    },
    {
        name: roles.deployer.key
    },
    {
        name: roles.user.key
    },
    {
        name: roles.guest.key
    },
];

export const RolesPrivilegesData = [
    {
        roleId: 1,
        scope: Scopes.all.key,
        
        // Privilegis crud d'administradors
        createAdmin: false,
        updateAdmin: false,
        deleteAdmin: false,
        readAdmin: false,
        
        // Privilegis crud d'usuaris
        createUser: true,
        updateUser: true,
        deleteUser: true,
        readUser: true,
        
        // Privilegis crud de projectes
        createProject: false,
        deleteProject: false,
        updateProject: false,
        readProject: false,
        
        // Privilegis crud de tasques
        createTask: false,
        updateTask: false,
        deleteTask: false,
        readTask: false,
        
        // Privilegis crud de comentaris
        createComment: false,
        updateComment: false,
        deleteComment: false,
        readComment: false,
        
        // Privilegis de desplegament i CI
        createSnapshot: false,
        createRelease: false,
        createFeature: false,
        createHotfix: false,
        deployment: false,
    },
    {
        roleId: 2,
        scope: Scopes.all.key,
        
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
    },
    {
        roleId: 3,
        scope: Scopes.owner.key,
        
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
    },
    {
        roleId: 4,
        scope: Scopes.owner.key,
        
        // Privilegis crud d'administradors
        createAdmin: false,
        updateAdmin: false,
        deleteAdmin: false,
        readAdmin: false,
        
        // Privilegis crud d'usuaris
        createUser: false,
        updateUser: false,
        deleteUser: false,
        readUser: false,
        
        // Privilegis crud de projectes
        createProject: false,
        deleteProject: false,
        updateProject: false,
        readProject: false,
        
        // Privilegis crud de tasques
        createTask: false,
        updateTask: false,
        deleteTask: false,
        readTask: false,
        
        // Privilegis crud de comentaris
        createComment: true,
        updateComment: true,
        deleteComment: true,
        readComment: true,
        
        // Privilegis de desplegament i CI
        createSnapshot: false,
        createRelease: true,
        createFeature: false,
        createHotfix: true,
        deployment: true,
    },
    {
        roleId: 5,
        scope: Scopes.owner.key,
        
        // Privilegis crud d'administradors
        createAdmin: false,
        updateAdmin: false,
        deleteAdmin: false,
        readAdmin: false,
        
        // Privilegis crud d'usuaris
        createUser: false,
        updateUser: false,
        deleteUser: false,
        readUser: false,
        
        // Privilegis crud de projectes
        createProject: false,
        deleteProject: false,
        updateProject: false,
        readProject: false,
        
        // Privilegis crud de tasques
        createTask: true,
        updateTask: true,
        deleteTask: true,
        readTask: true,
        
        // Privilegis crud de comentaris
        createComment: true,
        updateComment: false,
        deleteComment: true,
        readComment: true,
        
        // Privilegis de desplegament i CI
        createSnapshot: true,
        createRelease: true,
        createFeature: true,
        createHotfix: true,
        deployment: false,
    },
    {
        roleId: 6,
        scope: Scopes.owner.key,
        
        // Privilegis crud d'administradors
        createAdmin: false,
        updateAdmin: false,
        deleteAdmin: false,
        readAdmin: false,
        
        // Privilegis crud d'usuaris
        createUser: false,
        updateUser: false,
        deleteUser: false,
        readUser: false,
        
        // Privilegis crud de projectes
        createProject: false,
        deleteProject: false,
        updateProject: false,
        readProject: false,
        
        // Privilegis crud de tasques
        createTask: false,
        updateTask: false,
        deleteTask: false,
        readTask: false,
        
        // Privilegis crud de comentaris
        createComment: true,
        updateComment: true,
        deleteComment: true,
        readComment: true,
        
        // Privilegis de desplegament i CI
        createSnapshot: false,
        createRelease: false,
        createFeature: false,
        createHotfix: false,
        deployment: false,
    }
];