import { useHistory, Link } from "react-router-dom";

export const UserTableBody = ({ user }) => {
  const history = useHistory();

  return (
    <tbody class="bg-white divide-y divide-gray-200">
      <tr>
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="text-sm font-medium text-gray-900">
            {user.firstName} {user.lastName}
          </div>
          <div class="text-sm text-gray-500">{user.email}</div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {user.userName}
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="text-sm text-gray-900">{user.country}</div>
          <div class="text-sm text-gray-500">{user.phone}</div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          $ {user.totalInvestmentBalance && user.totalInvestmentBalance}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <Link
            to={`/admin/dashboard/${user._id}`}
            href="#"
            class="text-indigo-600 hover:text-indigo-900"
          >
            Edit
          </Link>
        </td>
      </tr>
    </tbody>
  );
};
