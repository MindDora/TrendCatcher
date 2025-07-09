/**
 * TrendChart Component
 * 
 * FRONTEND TEAM: Bu bileşeni Recharts ile geliştirin!
 * 
 * GÖREV: İş ilanı trendlerini görselleştiren interaktif grafik
 */

'use client';

import React, { useState, useEffect } from 'react';
// TODO: Frontend Team - Recharts import'ları ekleyin
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer
// } from 'recharts';

// TODO: Frontend Team - Type definitions
interface TrendData {
  date: string;
  count: number;
  skill?: string;
}

interface TrendChartProps {
  skill: string;
  period: string;
  location?: string;
  data?: TrendData[];
  isLoading?: boolean;
}

export default function TrendChart({ 
  skill, 
  period, 
  location, 
  data, 
  isLoading 
}: TrendChartProps) {
  
  const [chartData, setChartData] = useState<TrendData[]>([]);
  const [error, setError] = useState<string | null>(null);

  /**
   * TODO: Frontend Team - Data fetching logic
   * 
   * PSEUDO CODE:
   * 1. API call to /trends endpoint
   * 2. Error handling
   * 3. Loading states
   * 4. Data transformation for chart
   */
  useEffect(() => {
    const fetchTrendData = async () => {
      // TODO: Implement API call
      /*
      try {
        setError(null);
        const response = await fetch(
          `/api/trends?skill=${skill}&period=${period}&location=${location}`
        );
        const result = await response.json();
        setChartData(result.data);
      } catch (err) {
        setError('Trend verileri yüklenirken hata oluştu');
      }
      */
    };

    fetchTrendData();
  }, [skill, period, location]);

  /**
   * TODO: Frontend Team - Loading state component
   */
  if (isLoading) {
    return (
      <div className="w-full h-96 flex items-center justify-center">
        {/* TODO: Implement loading spinner */}
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  /**
   * TODO: Frontend Team - Error state component
   */
  if (error) {
    return (
      <div className="w-full h-96 flex items-center justify-center">
        <div className="text-red-500 text-center">
          <p>⚠️ Hata: {error}</p>
          <button 
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={() => window.location.reload()}
          >
            Tekrar Dene
          </button>
        </div>
      </div>
    );
  }

  /**
   * TODO: Frontend Team - Chart customization
   * 
   * FEATURES TO IMPLEMENT:
   * 1. Interactive tooltips
   * 2. Zoom functionality
   * 3. Multiple skill comparison
   * 4. Export to image/PDF
   * 5. Real-time updates
   */
  const chartConfig = {
    // TODO: Configure chart appearance
    colors: ['#3B82F6', '#10B981', '#F59E0B'],
    strokeWidth: 2,
    animation: true
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-6">
      {/* Chart Header */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800">
          {skill} - İş İlanı Trendi
        </h3>
        <p className="text-gray-600">
          {period} dönemi • {location || 'Tüm Türkiye'}
        </p>
      </div>

      {/* Chart Container */}
      <div className="w-full h-96">
        {/* TODO: Frontend Team - Recharts implementation */}
        {/*
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="date" 
              tickFormatter={(date) => format(new Date(date), 'dd/MM')}
            />
            <YAxis />
            <Tooltip 
              labelFormatter={(date) => format(new Date(date), 'dd MMMM yyyy')}
              formatter={(value, name) => [value, 'İlan Sayısı']}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="count" 
              stroke="#3B82F6" 
              strokeWidth={2}
              dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#3B82F6', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
        */}
        
        {/* Temporary placeholder */}
        <div className="w-full h-full bg-gray-50 rounded-lg flex items-center justify-center">
          <div className="text-center text-gray-500">
            <p className="text-lg">📊 Trend Grafiği</p>
            <p className="text-sm mt-2">Frontend Team: Recharts ile geliştirin</p>
          </div>
        </div>
      </div>

      {/* Chart Footer - Statistics */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        {/* TODO: Frontend Team - Summary statistics */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-blue-600 text-sm font-medium">Toplam İlan</p>
          <p className="text-2xl font-bold text-blue-800">
            {/* TODO: Calculate total from data */}
            {chartData?.reduce((sum, item) => sum + item.count, 0) || 0}
          </p>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-green-600 text-sm font-medium">Trend</p>
          <p className="text-2xl font-bold text-green-800">
            {/* TODO: Calculate trend direction */}
            📈 Artış
          </p>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg">
          <p className="text-purple-600 text-sm font-medium">Günlük Ort.</p>
          <p className="text-2xl font-bold text-purple-800">
            {/* TODO: Calculate daily average */}
            {Math.round((chartData?.reduce((sum, item) => sum + item.count, 0) || 0) / (chartData?.length || 1))}
          </p>
        </div>
      </div>

      {/* Chart Controls */}
      <div className="mt-6 flex justify-between items-center">
        {/* TODO: Frontend Team - Chart controls */}
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-sm bg-gray-100 rounded hover:bg-gray-200">
            📊 Grafik Tipi
          </button>
          <button className="px-3 py-1 text-sm bg-gray-100 rounded hover:bg-gray-200">
            📄 Export
          </button>
        </div>
        
        <div className="text-sm text-gray-500">
          Son güncellenme: {new Date().toLocaleString('tr-TR')}
        </div>
      </div>
    </div>
  );
}

/**
 * TODO: Frontend Team - Additional components to create:
 * 
 * 1. SkillSelector - Multi-select for comparing skills
 * 2. PeriodSelector - Time period selection
 * 3. LocationFilter - City/region filter
 * 4. ChartTypeToggle - Line/Bar/Area chart toggle
 * 5. ExportButton - Export functionality
 */ 