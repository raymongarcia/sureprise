import React, { useState } from 'react';

interface Account {
  username: string;
  email: string;
  password: string;
}

const AccountSettingsPage: React.FC = () => {
  const [account, setAccount] = useState<Account>({
    username: '',
    email: '',
    password: '',
  });

  const [accounts, setAccounts] = useState<Account[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAccount({ ...account, [name]: value });
  };

  const handleAddAccount = (e: React.FormEvent) => {
    e.preventDefault();
    setAccounts([...accounts, account]);
    setAccount({ username: '', email: '', password: '' });
  };

  const handleEditAccount = (index: number) => {
    const accountToEdit = accounts[index];
    setAccount(accountToEdit);
    handleDeleteAccount(index);
  };

  const handleDeleteAccount = (index: number) => {
    const updatedAccounts = accounts.filter((_, i) => i !== index);
    setAccounts(updatedAccounts);
  };

  return (
    <div>
      <h1>Account Settings</h1>
      <form onSubmit={handleAddAccount}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={account.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={account.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={account.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>

      <h2>Accounts</h2>
      <ul>
        {accounts.map((acc, index) => (
          <li key={index}>
            {acc.username} - {acc.email}
            <button onClick={() => handleEditAccount(index)}>Edit</button>
            <button onClick={() => handleDeleteAccount(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountSettingsPage;