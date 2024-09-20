export type ReportCategory = 'leads' | 'pipeline' | 'sales' | 'task';

export type ReportCategoryValue = {
  id: string;
  name: string;
}

export const reportCategory: Record<ReportCategory, ReportCategoryValue> = {
  leads: {
    id: 'leads',
    name: 'Leads',
  },
  pipeline: {
    id: 'pipeline',
    name: 'Pipeline',
  },
  sales: {
    id: 'sales',
    name: 'Sales',
  },
  task: {
    id: 'task',
    name: 'Task',
  },
};

export type Report = {
  id: string;
  name: string;
  category: ReportCategory;
  file: string;
};