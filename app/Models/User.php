<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\HasMany;
use Maravel\Models\AuthenticatableBase;

class User extends AuthenticatableBase
{
    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'password',
        'mobile',
        'profile',
    ];


    protected $appends = [
        'ability_rules',
        'full_name',
        'profile_fr',
    ];
    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $enumCasts = [
        'profile' => ['admin' => 'Administrateur', 'agent' => 'Agent', 'ministry' => 'Ministère']
    ];
    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }


    /**
     * Get the incidents created by this user.
     */
    public function incidents(): HasMany
    {
        return $this->hasMany(Incident::class, 'user_id');
    }


    public function getAbilityRulesAttribute(): array
    {
        return match ($this->profile) {
            'admin' => [['subject' => ['all'], 'action' => ['manage']]],
            default => [],
        };
    }

    public function getFullNameAttribute(): string
    {
        return "{$this->first_name} {$this->last_name}";
    }

    public function getProfileFrAttribute()
    {
        return match ($this->profile) {
            'admin' => 'Admin',
            'agent' => 'Agent',
            'ministry' => 'Ministère',
            default => 'Inconnue',
        };
    }

}
