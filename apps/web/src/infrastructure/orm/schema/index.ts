import {AuditsFactory, IdentifiersFactory} from "@/infrastructure/orm/schema/commons";
import {ArticleEntity, ArticleHasMedia} from "@/infrastructure/orm/schema/confluence"
import {MediaEntity} from "@/infrastructure/orm/schema/media";
import {RoleEntity, RolePrivilegesEntity} from "@/infrastructure/orm/schema/roles";
import {UserEntity, UserPrivilegesEntity, UserSettingsEntity} from "@/infrastructure/orm/schema/users";

export const PRIMARY_KEY_SYSTEM = 1;

export {
    ArticleEntity,
    ArticleHasMedia,
    AuditsFactory,
    IdentifiersFactory,
    MediaEntity,
    RoleEntity,
    RolePrivilegesEntity,
    UserEntity,
    UserPrivilegesEntity,
    UserSettingsEntity,
}

