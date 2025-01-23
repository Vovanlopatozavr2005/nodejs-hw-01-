import { PATH_DB } from '../constants/contacts.js';
import * as Fs from "node:fs/promises";

export const writeContacts = async (updatedContacts) => {
    await Fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
};
