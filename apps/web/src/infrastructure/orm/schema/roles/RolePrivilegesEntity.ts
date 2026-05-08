import {boolean, integer, pgTable, varchar} from "drizzle-orm/pg-core";
import {IdentifiersFactory} from "@/infrastructure/orm/schema";

export const RolePrivilegesEntity = pgTable(
    "roles_privileges",
    {
        ...IdentifiersFactory(),
        
        roleId:
            integer('role_id')
            .notNull(),
        
        scope:
            varchar('scope', {length: 10})
            .notNull(),
        
        // Privilegis crud d'administradors
        createAdmin:
            boolean('create_admin')
            .default(false),
        
        updateAdmin:
            boolean('update_admin')
            .default(false),
        
        deleteAdmin:
            boolean('delete_admin')
            .default(false),
        
        readAdmin:
            boolean('read_admin')
            .default(false),
        
        // Privilegis crud d'usuaris
        createUser:
            boolean('create_user')
            .default(false),
        
        updateUser:
            boolean('update_user')
            .default(false),
        
        deleteUser:
            boolean('delete_user')
            .default(false),
        
        readUser:
            boolean('read_user')
            .default(false),
        
        // Privilegis crud de projectes
        createProject:
            boolean('create_project')
            .default(false),
        
        deleteProject:
            boolean('delete_project')
            .default(false),
        
        updateProject:
            boolean('update_project')
            .default(false),
        
        readProject:
            boolean('read_project')
            .default(false),
        
        // Privilegis crud de tasques
        createTask:
            boolean('create_task')
            .default(false),
        
        updateTask:
            boolean('update_task')
            .default(false),
        
        deleteTask:
            boolean('delete_task')
            .default(false),
        
        readTask:
            boolean('read_task')
            .default(false),
        
        // Privilegis crud de comentaris
        createComment:
            boolean('create_comment')
            .default(false),
        
        updateComment:
            boolean('update_comment')
            .default(false),
        
        deleteComment:
            boolean('delete_comment')
            .default(false),
        
        readComment:
            boolean('read_comment')
            .default(false),
        
        // Privilegis de desplegament i CI
        createSnapshot:
            boolean('create_snapshot')
            .default(false),
        
        createRelease:
            boolean('create_release')
            .default(false),
        
        createFeature:
            boolean('create_feature')
            .default(false),
        
        createHotfix:
            boolean('create_hotfix')
            .default(false),
        
        deployment:
            boolean('deploys')
            .default(false),
    });