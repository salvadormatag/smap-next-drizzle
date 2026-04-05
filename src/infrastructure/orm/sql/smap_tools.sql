/* Funció per anonimització de users que demanen l'esborrat definitiu de les seves dades.
La idea és no perdre la relació (NULL) en els camps createdBy, updatedBy i deletedBy dels registres
de la BD en qualsevol taula un cop un user s'ha "esborrat".
*/
CREATE OR REPLACE FUNCTION fn_trigger_anonymize_user()
RETURNS TRIGGER AS $$
BEGIN
    -- Verificació: si ja està anonimitzat, no fem res o l'esborrem de debò
    IF OLD.unsubscribed_at IS NOT NULL THEN
        RETURN OLD; -- Permet l'esborrat real si ja estava anonimitzat
    END IF;

    -- Procés d'anonimització (Wipe)
    UPDATE users
    SET
        unsubscribed_at = NOW(),
        full_name = concat_ws(', ', concat_ws(' ', OLD.first_surname, OLD.second_surname), OLD.name),
        name = 'ANON',
        first_surname = 'ANON',
        second_surname = NULL,
        email = 'anon_' || OLD.pk || '@internal.system'
    WHERE pk = OLD.pk;

    -- CRUCIAL: Retornem NULL per cancel·lar l'operació de DELETE original
    RETURN NULL;
END;
$$ LANGUAGE plpgsql;

/* Preparem un trigger before delete on users per fer la anonimització del registre */
CREATE TRIGGER trigger_soft_delete_user
BEFORE DELETE ON users
FOR EACH ROW
EXECUTE FUNCTION fn_trigger_anonymize_user();