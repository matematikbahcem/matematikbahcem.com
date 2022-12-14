import Layout from '../components/layout';
import Link from 'next/link';
import Image from 'next/image';

export default function Custum404() {
  return (
    <Layout>
      <section className="w-10/12 m-auto mt-16 grid grid-cols-1 md:grid-cols-2 items-center">
        <div>
          <h1 className="font-black text-9xl mb-8 text-black">404!</h1>
          <h2 className="font-semibold text-3xl mb-8 text-gray-600">Kime bakmıştınız?</h2>
          <p className="font-light text-gray-500">
            Aradığınız sayfa şuanda bizde yoktur. Eğer olması gereken bir sayfa ise bizimle{' '}
            <Link className="text-yellow-700" href="/iletisim">
              iletişime
            </Link>{' '}
            geçiniz!
          </p>
        </div>
        <div>
          <Image src="/cat.jpg" alt="404" layout="responsive" width="100%" height="100%" />
        </div>
      </section>
    </Layout>
  );
}
