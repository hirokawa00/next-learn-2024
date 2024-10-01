import { ProductCard } from '@/app/(auth)/components/product-card';
import { SalesCard } from '@/app/(auth)/components/sales-card';
import { StoreCard } from '@/app/(auth)/components/store-card';
import { UserCard } from '@/app/(auth)/components/user-card';
import { ContentLayout } from '@/components/admin-panel/content-layout';
import { HourlySalesTodayChart } from './components/hourly-sales-today-chart';
import { ProductCategorySalesPieChart } from './components/product-category-sales-pie-chart';
import { SalesForecastLineChart } from './components/sales-forecast-chart';
import { WeeklySalesChart } from './components/weekly-sales-chart';

// サーバーコンポーネントで SSR を強制
export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <ContentLayout title="Home">
      <div className="min-h-screen p-6">
        <h1 className="text-2xl font-bold mb-4">Dashboardd</h1>

        {/* 各種情報カード */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4">
          {/* 店舗情報 */}
          <StoreCard />

          {/* 商品情報 */}
          <ProductCard />

          {/* ユーザー情報 */}
          <UserCard />

          {/* 売上情報 */}
          <SalesCard />
        </div>

        {/* 売上データのグラフ表示 */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Sales Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {/* 当日の1時間ごとの売上 */}
            <HourlySalesTodayChart />

            {/* 過去1週間の売上 */}
            <WeeklySalesChart />

            {/* 部門ごとの売上構成比 */}
            <ProductCategorySalesPieChart />

            {/* 売上予測 */}
            <SalesForecastLineChart />
          </div>
        </div>
      </div>
    </ContentLayout>
  );
}
