import { fetchFilteredCustomers } from '@/app/lib/data';
import Table from '@/app/ui/customers/table';
import { lusitana } from '@/app/ui/fonts';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import Search from '@/app/ui/search';

export default async function Page( {
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const customertable = await fetchFilteredCustomers(query)
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="w-full">
      <Table customers={customertable}></Table>
    </div>
  );
}