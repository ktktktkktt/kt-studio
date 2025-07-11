
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

const quizSchema = z.object({
  purpose: z.string().min(1, 'Выберите вариант ответа'),
  branding: z.string().min(1, 'Выберите вариант ответа'),
  pages: z.string().min(1, 'Выберите вариант ответа'),
  selfManagement: z.string().min(1, 'Выберите вариант ответа'),
  features: z.string().min(1, 'Выберите вариант ответа'),
  examples: z.string().min(1, 'Выберите вариант ответа'),
  budget: z.string().min(1, 'Выберите вариант ответа'),
  name: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().optional(),
});

type QuizData = z.infer<typeof quizSchema>;

const questions = [
  {
    id: 'purpose',
    title: 'Для какой цели вам нужен сайт?',
    options: [
      { value: 'sales', label: 'Продажа товаров или услуг онлайн' },
      { value: 'clients', label: 'Привлечение новых клиентов' },
      { value: 'portfolio', label: 'Представление компании/портфолио' },
      { value: 'other', label: 'Другое' },
    ],
  },
  {
    id: 'branding',
    title: 'Есть ли у вас уже фирменный стиль или логотип?',
    options: [
      { value: 'complete', label: 'Да, всё готово' },
      { value: 'logo-only', label: 'Есть только логотип' },
      { value: 'none', label: 'Нет, нужно разработать' },
      { value: 'unsure', label: 'Не уверен(а)' },
    ],
  },
  {
    id: 'pages',
    title: 'Сколько страниц примерно должно быть на сайте?',
    options: [
      { value: '1', label: '1 (лендинг)' },
      { value: '2-5', label: '2-5' },
      { value: '6-10', label: '6-10' },
      { value: '10+', label: 'Больше 10' },
      { value: 'unknown', label: 'Пока не знаю' },
    ],
  },
  {
    id: 'selfManagement',
    title: 'Нужна ли вам возможность самостоятельно менять информацию на сайте?',
    options: [
      { value: 'yes', label: 'Да, хочу сам(а) управлять контентом' },
      { value: 'no', label: 'Нет, достаточно статичного сайта' },
      { value: 'unsure', label: 'Не уверен(а)' },
    ],
  },
  {
    id: 'features',
    title: 'Какие функции должны быть на сайте?',
    options: [
      { value: 'contact-form', label: 'Форма обратной связи' },
      { value: 'payment', label: 'Онлайн-оплата' },
      { value: 'gallery', label: 'Галерея работ/портфолио' },
      { value: 'blog', label: 'Новости/блог' },
      { value: 'other', label: 'Другое' },
    ],
  },
  {
    id: 'examples',
    title: 'Есть ли у вас примеры сайтов, которые вам нравятся?',
    options: [
      { value: 'yes', label: 'Да, могу показать' },
      { value: 'describe', label: 'Нет, но могу описать пожелания' },
      { value: 'recommendations', label: 'Нет, рассчитываю на рекомендации' },
    ],
  },
  {
    id: 'budget',
    title: 'Какой у вас ориентировочный бюджет на разработку сайта?',
    options: [
      { value: 'up-to-50k', label: 'До 50 000 руб.' },
      { value: '50k-100k', label: '50 000 – 100 000 руб.' },
      { value: '100k-200k', label: '100 000 – 200 000 руб.' },
      { value: '200k+', label: 'Более 200 000 руб.' },
      { value: 'undecided', label: 'Пока не определился(ась)' },
    ],
  },
];

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  const form = useForm<QuizData>({
    resolver: zodResolver(quizSchema),
    defaultValues: {
      purpose: '',
      branding: '',
      pages: '',
      selfManagement: '',
      features: '',
      examples: '',
      budget: '',
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const nextStep = async () => {
    const currentQuestion = questions[currentStep];
    const isValid = await form.trigger(currentQuestion.id as keyof QuizData);
    
    if (isValid) {
      if (currentStep < questions.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setShowResults(true);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetQuiz = () => {
    form.reset();
    setCurrentStep(0);
    setShowResults(false);
    setShowContactForm(false);
  };

  const getRecommendations = () => {
    const values = form.getValues();
    const recommendations = [];

    // Рекомендации по типу сайта
    if (values.purpose === 'sales') {
      recommendations.push('Интернет-магазин с системой онлайн-платежей');
    } else if (values.purpose === 'clients') {
      recommendations.push('Корпоративный сайт с формами обратной связи');
    } else if (values.purpose === 'portfolio') {
      recommendations.push('Сайт-портфолио с галереей работ');
    }

    // Рекомендации по количеству страниц
    if (values.pages === '1') {
      recommendations.push('Одностраничный лендинг для быстрого запуска');
    } else if (values.pages === '2-5') {
      recommendations.push('Многостраничный сайт-визитка');
    } else if (values.pages === '6-10' || values.pages === '10+') {
      recommendations.push('Полноценный корпоративный сайт');
    }

    // Рекомендации по управлению контентом
    if (values.selfManagement === 'yes') {
      recommendations.push('CMS система для самостоятельного управления');
    }

    return recommendations;
  };

  const onSubmit = (data: QuizData) => {
    console.log('Quiz submission:', data);
    toast({
      title: 'Спасибо за заявку!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    // Здесь можно добавить отправку данных на сервер
  };

  const progress = ((currentStep + 1) / questions.length) * 100;

  if (showResults) {
    const recommendations = getRecommendations();
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 section-padding">
        <div className="container-custom max-w-4xl mx-auto">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle className="text-3xl font-bold text-gradient mb-4">
                Результаты квиза
              </CardTitle>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                На основе ваших ответов мы подготовили рекомендации
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-primary/5 dark:bg-primary/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  Рекомендуемые решения:
                </h3>
                <ul className="space-y-2">
                  {recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Хотите получить индивидуальное предложение?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={() => setShowContactForm(true)} className="btn-primary">
                    Получить коммерческое предложение
                  </Button>
                  <Button onClick={resetQuiz} variant="outline">
                    Пройти квиз заново
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {showContactForm && (
            <Card className="mt-8 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">
                  Оставьте контакты
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <Label htmlFor="name">Имя</Label>
                            <FormControl>
                              <Input {...field} placeholder="Ваше имя" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <Label htmlFor="phone">Телефон</Label>
                            <FormControl>
                              <Input {...field} placeholder="+7 (999) 123-45-67" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <Label htmlFor="email">Email</Label>
                          <FormControl>
                            <Input {...field} placeholder="example@email.com" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <Label htmlFor="message">Дополнительные пожелания</Label>
                          <FormControl>
                            <Textarea {...field} placeholder="Расскажите подробнее о вашем проекте..." />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full btn-primary">
                      Отправить заявку
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentStep];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 section-padding">
      <div className="container-custom max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Квиз по разработке сайта</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Этот короткий квиз поможет понять ваши потребности и подобрать оптимальное решение для создания сайта
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Вопрос {currentStep + 1} из {questions.length}
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <Card className="shadow-xl animate-fade-in">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              {currentQuestion.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <FormField
                control={form.control}
                name={currentQuestion.id as keyof QuizData}
                render={({ field }) => (
                  <FormItem className="space-y-4">
                    <FormControl>
                      <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                        className="space-y-3"
                      >
                        {currentQuestion.options.map((option) => (
                          <div key={option.value} className="flex items-center space-x-3">
                            <RadioGroupItem value={option.value} id={option.value} />
                            <Label
                              htmlFor={option.value}
                              className="text-base cursor-pointer flex-1 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                            >
                              {option.label}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Form>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <Button
            onClick={prevStep}
            disabled={currentStep === 0}
            variant="outline"
            className="flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад
          </Button>

          <Button onClick={nextStep} className="btn-primary flex items-center">
            {currentStep === questions.length - 1 ? 'Показать результаты' : 'Далее'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
