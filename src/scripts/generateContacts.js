import { readContacts } from '../utils/readContacts.js';

import { createFakeContact } from '../utils/createFakeContact.js';

import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const contactList = await readContacts();
  const newContacts = Array(number).fill(0).map(createFakeContact);
  const updatedContacts = [...contactList, ...newContacts];
  await writeContacts(updatedContacts);
};

generateContacts(5);


