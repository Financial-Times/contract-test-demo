import { ImageIcon } from '@/components/imageIcon';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CurvedLineChart } from '@/components/curvedLineChart';

export default function Home() {
  return (
    <div key="1" className="flex flex-col h-full w-full bg-[#f9e5d7]">
      <header className="flex justify-between items-center h-16 px-6 bg-[#333333] text-white">
        <Link className="flex items-center gap-2 text-lg font-semibold" href="#">
          <ImageIcon className="w-6 h-6" />
          <span>StockTrade</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link className="text-white hover:text-[#0075b0]" href="#">
            Dashboard
          </Link>
          <Link className="text-white hover:text-[#0075b0]" href="#">
            Portfolio
          </Link>
          <Link className="text-white hover:text-[#0075b0]" href="#">
            Market
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Avatar className="w-8 h-8">
            <AvatarImage alt="John Doe" src="/placeholder-avatar.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <span>John Doe</span>
        </div>
      </header>
      <main className="flex-1 p-6 bg-[#f9e5d7]">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 carousel">
          <Card className="bg-white">
            <CardHeader>
              <span className="text-lg font-bold text-[#333333]">AAPL</span>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div>
                <span className="text-3xl font-bold text-[#333333]">$150.30</span>
                <Badge className="ml-2 bg-green-500 text-white">+2.67%</Badge>
              </div>
              <Button className="bg-[#0075b0] text-white">Trade</Button>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardHeader>
              <span className="text-lg font-bold text-[#333333]">GOOG</span>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div>
                <span className="text-3xl font-bold text-[#333333]">$2,805.67</span>
                <Badge className="ml-2 bg-red-500 text-white">-1.34%</Badge>
              </div>
              <Button className="bg-[#0075b0] text-white">Trade</Button>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardHeader>
              <span className="text-lg font-bold text-[#333333]">TSLA</span>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div>
                <span className="text-3xl font-bold text-[#333333]">$688.99</span>
                <Badge className="ml-2 bg-green-500 text-white">+0.45%</Badge>
              </div>
              <Button className="bg-[#0075b0] text-white">Trade</Button>
            </CardContent>
          </Card>
        </div>
        <div className="mt-6">
          <Card className="bg-white">
            <CardHeader>
              <span className="text-lg font-bold text-[#333333]">Market Overview</span>
            </CardHeader>
            <CardContent>
              <CurvedLineChart className="w-full h-[300px]" />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
